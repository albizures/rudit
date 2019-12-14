import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмешиваться: PerfectVerb = {
  name: Word('вмешиваться', 2),
  singular1stPerson: Word('вмешиваюсь', 2),
  singular2ndPerson: Word('вмешиваешься', 2),
  singular3rdPerson: Word('вмешивается', 2),
  plural1stPerson: Word('вмешиваемся', 2),
  plural2ndPerson: Word('вмешиваетесь', 2),
  plural3rdPerson: Word('вмешиваются', 2),
  masculinePast: Word('вмешивался', 2),
  femininePast: Word('вмешивалась', 2),
  neuterPast: Word('вмешивалось', 2),
  pluralPast: Word('вмешивались', 2),
  imperativeInformal: Word('вмешивайся', 2),
  imperativeFormal: Word('вмешивайтесь', 2),
  imperfect: ['вмешаться'],
};

perfectVerbs.set(вмешиваться.name.text, вмешиваться);

export { вмешиваться };
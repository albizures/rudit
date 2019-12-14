import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассеиваться: PerfectVerb = {
  name: Word('рассеиваться', 4),
  singular1stPerson: Word('рассеиваюсь', 4),
  singular2ndPerson: Word('рассеиваешься', 4),
  singular3rdPerson: Word('рассеивается', 4),
  plural1stPerson: Word('рассеиваемся', 4),
  plural2ndPerson: Word('рассеиваетесь', 4),
  plural3rdPerson: Word('рассеиваются', 4),
  masculinePast: Word('рассеивался', 4),
  femininePast: Word('рассеивалась', 4),
  neuterPast: Word('рассеивалось', 4),
  pluralPast: Word('рассеивались', 4),
  imperativeInformal: Word('рассеивайся', 4),
  imperativeFormal: Word('рассеивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(рассеиваться.name.text, рассеиваться);

export { рассеиваться };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвешиваться: PerfectVerb = {
  name: Word('взвешиваться', 3),
  singular1stPerson: Word('взвешиваюсь', 3),
  singular2ndPerson: Word('взвешиваешься', 3),
  singular3rdPerson: Word('взвешивается', 3),
  plural1stPerson: Word('взвешиваемся', 3),
  plural2ndPerson: Word('взвешиваетесь', 3),
  plural3rdPerson: Word('взвешиваются', 3),
  masculinePast: Word('взвешивался', 3),
  femininePast: Word('взвешивалась', 3),
  neuterPast: Word('взвешивалось', 3),
  pluralPast: Word('взвешивались', 3),
  imperativeInformal: Word('взвешивайся', 3),
  imperativeFormal: Word('взвешивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(взвешиваться.name.text, взвешиваться);

export { взвешиваться };
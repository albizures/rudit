import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашвартоваться: PerfectVerb = {
  name: Word('зашвартоваться', 9),
  singular1stPerson: Word('зашвартуюсь', 7),
  singular2ndPerson: Word('зашвартуешься', 7),
  singular3rdPerson: Word('зашвартуется', 7),
  plural1stPerson: Word('зашвартуемся', 7),
  plural2ndPerson: Word('зашвартуетесь', 7),
  plural3rdPerson: Word('зашвартуются', 7),
  masculinePast: Word('зашвартовался', 9),
  femininePast: Word('зашвартовалась', 9),
  neuterPast: Word('зашвартовалось', 9),
  pluralPast: Word('зашвартовались', 9),
  imperativeInformal: Word('зашвартуйся', 7),
  imperativeFormal: Word('зашвартуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(зашвартоваться.name.text, зашвартоваться);

export { зашвартоваться };
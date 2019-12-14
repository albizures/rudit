import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарумяниваться: PerfectVerb = {
  name: Word('зарумяниваться', 5),
  singular1stPerson: Word('зарумяниваюсь', 5),
  singular2ndPerson: Word('зарумяниваешься', 5),
  singular3rdPerson: Word('зарумянивается', 5),
  plural1stPerson: Word('зарумяниваемся', 5),
  plural2ndPerson: Word('зарумяниваетесь', 5),
  plural3rdPerson: Word('зарумяниваются', 5),
  masculinePast: Word('зарумянивался', 5),
  femininePast: Word('зарумянивалась', 5),
  neuterPast: Word('зарумянивалось', 5),
  pluralPast: Word('зарумянивались', 5),
  imperativeInformal: Word('зарумянивайся', 5),
  imperativeFormal: Word('зарумянивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зарумяниваться.name.text, зарумяниваться);

export { зарумяниваться };
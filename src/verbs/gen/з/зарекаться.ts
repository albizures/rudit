import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарекаться: PerfectVerb = {
  name: Word('зарекаться', 5),
  singular1stPerson: Word('зарекаюсь', 5),
  singular2ndPerson: Word('зарекаешься', 5),
  singular3rdPerson: Word('зарекается', 5),
  plural1stPerson: Word('зарекаемся', 5),
  plural2ndPerson: Word('зарекаетесь', 5),
  plural3rdPerson: Word('зарекаются', 5),
  masculinePast: Word('зарекался', 5),
  femininePast: Word('зарекалась', 5),
  neuterPast: Word('зарекалось', 5),
  pluralPast: Word('зарекались', 5),
  imperativeInformal: Word('зарекайся', 5),
  imperativeFormal: Word('зарекайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зарекаться.name.text, зарекаться);

export { зарекаться };
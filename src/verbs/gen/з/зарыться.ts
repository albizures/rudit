import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарыться: PerfectVerb = {
  name: Word('зарыться', 3),
  singular1stPerson: Word('зароюсь', 3),
  singular2ndPerson: Word('зароешься', 3),
  singular3rdPerson: Word('зароется', 3),
  plural1stPerson: Word('зароемся', 3),
  plural2ndPerson: Word('зароетесь', 3),
  plural3rdPerson: Word('зароются', 3),
  masculinePast: Word('зарылся', 3),
  femininePast: Word('зарылась', 3),
  neuterPast: Word('зарылось', 3),
  pluralPast: Word('зарылись', 3),
  imperativeInformal: Word('заройся', 3),
  imperativeFormal: Word('заройтесь', 3),
  imperfect: [],
};

perfectVerbs.set(зарыться.name.text, зарыться);

export { зарыться };
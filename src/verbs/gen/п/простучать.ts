import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простучать: PerfectVerb = {
  name: Word('простучать', 7),
  singular1stPerson: Word('простучу', 7),
  singular2ndPerson: Word('простучишь', 7),
  singular3rdPerson: Word('простучит', 7),
  plural1stPerson: Word('простучим', 7),
  plural2ndPerson: Word('простучите', 7),
  plural3rdPerson: Word('простучат', 7),
  masculinePast: Word('простучал', 7),
  femininePast: Word('простучала', 7),
  neuterPast: Word('простучало', 7),
  pluralPast: Word('простучали', 7),
  imperativeInformal: Word('простучи', 7),
  imperativeFormal: Word('простучите', 7),
  imperfect: [],
};

perfectVerbs.set(простучать.name.text, простучать);

export { простучать };
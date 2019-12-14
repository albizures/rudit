import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъясниться: PerfectVerb = {
  name: Word('разъясниться', 4),
  singular1stPerson: Word('разъяснюсь', 4),
  singular2ndPerson: Word('разъяснишься', 4),
  singular3rdPerson: Word('разъяснится', 4),
  plural1stPerson: Word('разъяснимся', 4),
  plural2ndPerson: Word('разъяснитесь', 4),
  plural3rdPerson: Word('разъяснятся', 4),
  masculinePast: Word('разъяснился', 4),
  femininePast: Word('разъяснилась', 4),
  neuterPast: Word('разъяснилось', 4),
  pluralPast: Word('разъяснились', 4),
  imperativeInformal: Word('разъяснись', 4),
  imperativeFormal: Word('разъяснитесь', 4),
  imperfect: [],
};

perfectVerbs.set(разъясниться.name.text, разъясниться);

export { разъясниться };
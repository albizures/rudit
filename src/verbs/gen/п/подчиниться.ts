import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчиниться: PerfectVerb = {
  name: Word('подчиниться', 6),
  singular1stPerson: Word('подчинюсь', 6),
  singular2ndPerson: Word('подчинишься', 6),
  singular3rdPerson: Word('подчинится', 6),
  plural1stPerson: Word('подчинимся', 6),
  plural2ndPerson: Word('подчинитесь', 6),
  plural3rdPerson: Word('подчинятся', 6),
  masculinePast: Word('подчинился', 6),
  femininePast: Word('подчинилась', 6),
  neuterPast: Word('подчинилось', 6),
  pluralPast: Word('подчинились', 6),
  imperativeInformal: Word('подчинись', 6),
  imperativeFormal: Word('подчинитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подчиниться.name.text, подчиниться);

export { подчиниться };
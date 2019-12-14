import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подновиться: PerfectVerb = {
  name: Word('подновиться', 6),
  singular1stPerson: Word('подновлюсь', 7),
  singular2ndPerson: Word('подновишься', 6),
  singular3rdPerson: Word('подновится', 6),
  plural1stPerson: Word('подновимся', 6),
  plural2ndPerson: Word('подновитесь', 6),
  plural3rdPerson: Word('подновятся', 6),
  masculinePast: Word('подновился', 6),
  femininePast: Word('подновилась', 6),
  neuterPast: Word('подновилось', 6),
  pluralPast: Word('подновились', 6),
  imperativeInformal: Word('подновись', 6),
  imperativeFormal: Word('подновитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подновиться.name.text, подновиться);

export { подновиться };
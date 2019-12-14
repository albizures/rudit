import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const акклиматизироваться: PerfectVerb = {
  name: Word('акклиматизироваться', 10),
  singular1stPerson: Word('акклиматизируюсь', 10),
  singular2ndPerson: Word('акклиматизируешься', 10),
  singular3rdPerson: Word('акклиматизируется', 10),
  plural1stPerson: Word('акклиматизируемся', 10),
  plural2ndPerson: Word('акклиматизируетесь', 10),
  plural3rdPerson: Word('акклиматизируются', 10),
  masculinePast: Word('акклиматизировался', 10),
  femininePast: Word('акклиматизировалась', 10),
  neuterPast: Word('акклиматизировалось', 10),
  pluralPast: Word('акклиматизировались', 10),
  imperativeInformal: Word('акклиматизируйся', 10),
  imperativeFormal: Word('акклиматизируйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(акклиматизироваться.name.text, акклиматизироваться);

export { акклиматизироваться };
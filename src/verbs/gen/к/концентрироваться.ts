import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const концентрироваться: PerfectVerb = {
  name: Word('концентрироваться', 8),
  singular1stPerson: Word('концентрируюсь', 8),
  singular2ndPerson: Word('концентрируешься', 8),
  singular3rdPerson: Word('концентрируется', 8),
  plural1stPerson: Word('концентрируемся', 8),
  plural2ndPerson: Word('концентрируетесь', 8),
  plural3rdPerson: Word('концентрируются', 8),
  masculinePast: Word('концентрировался', 8),
  femininePast: Word('концентрировалась', 8),
  neuterPast: Word('концентрировалось', 8),
  pluralPast: Word('концентрировались', 8),
  imperativeInformal: Word('концентрируйся', 8),
  imperativeFormal: Word('концентрируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(концентрироваться.name.text, концентрироваться);

export { концентрироваться };
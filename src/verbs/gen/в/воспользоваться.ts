import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспользоваться: PerfectVerb = {
  name: Word('воспользоваться', 4),
  singular1stPerson: Word('воспользуюсь', 4),
  singular2ndPerson: Word('воспользуешься', 4),
  singular3rdPerson: Word('воспользуется', 4),
  plural1stPerson: Word('воспользуемся', 4),
  plural2ndPerson: Word('воспользуетесь', 4),
  plural3rdPerson: Word('воспользуются', 4),
  masculinePast: Word('воспользовался', 4),
  femininePast: Word('воспользовалась', 4),
  neuterPast: Word('воспользовалось', 4),
  pluralPast: Word('воспользовались', 4),
  imperativeInformal: Word('воспользуйся', 4),
  imperativeFormal: Word('воспользуйтесь', 4),
  imperfect: ['пользоваться'],
};

perfectVerbs.set(воспользоваться.name.text, воспользоваться);

export { воспользоваться };
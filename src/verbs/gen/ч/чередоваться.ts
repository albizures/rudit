import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чередоваться: PerfectVerb = {
  name: Word('чередоваться', 7),
  singular1stPerson: Word('чередуюсь', 5),
  singular2ndPerson: Word('чередуешься', 5),
  singular3rdPerson: Word('чередуется', 5),
  plural1stPerson: Word('чередуемся', 5),
  plural2ndPerson: Word('чередуетесь', 5),
  plural3rdPerson: Word('чередуются', 5),
  masculinePast: Word('чередовался', 7),
  femininePast: Word('чередовалась', 7),
  neuterPast: Word('чередовалось', 7),
  pluralPast: Word('чередовались', 7),
  imperativeInformal: Word('чередуйся', 5),
  imperativeFormal: Word('чередуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(чередоваться.name.text, чередоваться);

export { чередоваться };
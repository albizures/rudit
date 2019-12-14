import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстараться: PerfectVerb = {
  name: Word('расстараться', 7),
  singular1stPerson: Word('расстараюсь', 7),
  singular2ndPerson: Word('расстараешься', 7),
  singular3rdPerson: Word('расстарается', 7),
  plural1stPerson: Word('расстараемся', 7),
  plural2ndPerson: Word('расстараетесь', 7),
  plural3rdPerson: Word('расстараются', 7),
  masculinePast: Word('расстарался', 7),
  femininePast: Word('расстаралась', 7),
  neuterPast: Word('расстаралось', 7),
  pluralPast: Word('расстарались', 7),
  imperativeInformal: Word('расстарайся', 7),
  imperativeFormal: Word('расстарайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расстараться.name.text, расстараться);

export { расстараться };
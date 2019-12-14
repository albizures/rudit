import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обосноваться: PerfectVerb = {
  name: Word('обосноваться', 7),
  singular1stPerson: Word('обоснуюсь', 5),
  singular2ndPerson: Word('обоснуешься', 5),
  singular3rdPerson: Word('обоснуется', 5),
  plural1stPerson: Word('обоснуемся', 5),
  plural2ndPerson: Word('обоснуетесь', 5),
  plural3rdPerson: Word('обоснуются', 5),
  masculinePast: Word('обосновался', 7),
  femininePast: Word('обосновалась', 7),
  neuterPast: Word('обосновалось', 7),
  pluralPast: Word('обосновались', 7),
  imperativeInformal: Word('обоснуйся', 5),
  imperativeFormal: Word('обоснуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обосноваться.name.text, обосноваться);

export { обосноваться };
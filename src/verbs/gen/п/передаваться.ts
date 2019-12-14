import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передаваться: PerfectVerb = {
  name: Word('передаваться', 7),
  singular1stPerson: Word('передаюсь', 6),
  singular2ndPerson: Word('передаёшься', 6),
  singular3rdPerson: Word('передаётся', 6),
  plural1stPerson: Word('передаёмся', 6),
  plural2ndPerson: Word('передаётесь', 6),
  plural3rdPerson: Word('передаются', 6),
  masculinePast: Word('передавался', 7),
  femininePast: Word('передавалась', 7),
  neuterPast: Word('передавалось', 7),
  pluralPast: Word('передавались', 7),
  imperativeInformal: Word('передавайся', 7),
  imperativeFormal: Word('передавайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(передаваться.name.text, передаваться);

export { передаваться };
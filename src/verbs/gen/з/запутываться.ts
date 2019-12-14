import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запутываться: PerfectVerb = {
  name: Word('запутываться', 3),
  singular1stPerson: Word('запутываюсь', 3),
  singular2ndPerson: Word('запутываешься', 3),
  singular3rdPerson: Word('запутывается', 3),
  plural1stPerson: Word('запутываемся', 3),
  plural2ndPerson: Word('запутываетесь', 3),
  plural3rdPerson: Word('запутываются', 3),
  masculinePast: Word('запутывался', 3),
  femininePast: Word('запутывалась', 3),
  neuterPast: Word('запутывалось', 3),
  pluralPast: Word('запутывались', 3),
  imperativeInformal: Word('запутывайся', 3),
  imperativeFormal: Word('запутывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(запутываться.name.text, запутываться);

export { запутываться };
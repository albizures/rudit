import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посвящаться: PerfectVerb = {
  name: Word('посвящаться', 6),
  singular1stPerson: Word('посвящаюсь', 6),
  singular2ndPerson: Word('посвящаешься', 6),
  singular3rdPerson: Word('посвящается', 6),
  plural1stPerson: Word('посвящаемся', 6),
  plural2ndPerson: Word('посвящаетесь', 6),
  plural3rdPerson: Word('посвящаются', 6),
  masculinePast: Word('посвящался', 6),
  femininePast: Word('посвящалась', 6),
  neuterPast: Word('посвящалось', 6),
  pluralPast: Word('посвящались', 6),
  imperativeInformal: Word('посвящайся', 6),
  imperativeFormal: Word('посвящайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(посвящаться.name.text, посвящаться);

export { посвящаться };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплываться: PerfectVerb = {
  name: Word('сплываться', 5),
  singular1stPerson: Word('сплываюсь', 5),
  singular2ndPerson: Word('сплываешься', 5),
  singular3rdPerson: Word('сплывается', 5),
  plural1stPerson: Word('сплываемся', 5),
  plural2ndPerson: Word('сплываетесь', 5),
  plural3rdPerson: Word('сплываются', 5),
  masculinePast: Word('сплывался', 5),
  femininePast: Word('сплывалась', 5),
  neuterPast: Word('сплывалось', 5),
  pluralPast: Word('сплывались', 5),
  imperativeInformal: Word('сплывайся', 5),
  imperativeFormal: Word('сплывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сплываться.name.text, сплываться);

export { сплываться };
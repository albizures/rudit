import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплываться: PerfectVerb = {
  name: Word('расплываться', 7),
  singular1stPerson: Word('расплываюсь', 7),
  singular2ndPerson: Word('расплываешься', 7),
  singular3rdPerson: Word('расплывается', 7),
  plural1stPerson: Word('расплываемся', 7),
  plural2ndPerson: Word('расплываетесь', 7),
  plural3rdPerson: Word('расплываются', 7),
  masculinePast: Word('расплывался', 7),
  femininePast: Word('расплывалась', 7),
  neuterPast: Word('расплывалось', 7),
  pluralPast: Word('расплывались', 7),
  imperativeInformal: Word('расплывайся', 7),
  imperativeFormal: Word('расплывайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расплываться.name.text, расплываться);

export { расплываться };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обделываться: PerfectVerb = {
  name: Word('обделываться', 3),
  singular1stPerson: Word('обделываюсь', 3),
  singular2ndPerson: Word('обделываешься', 3),
  singular3rdPerson: Word('обделывается', 3),
  plural1stPerson: Word('обделываемся', 3),
  plural2ndPerson: Word('обделываетесь', 3),
  plural3rdPerson: Word('обделываются', 3),
  masculinePast: Word('обделывался', 3),
  femininePast: Word('обделывалась', 3),
  neuterPast: Word('обделывалось', 3),
  pluralPast: Word('обделывались', 3),
  imperativeInformal: Word('обделывайся', 3),
  imperativeFormal: Word('обделывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обделываться.name.text, обделываться);

export { обделываться };
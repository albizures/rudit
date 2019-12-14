import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцарапываться: PerfectVerb = {
  name: Word('расцарапываться', 6),
  singular1stPerson: Word('расцарапываюсь', 6),
  singular2ndPerson: Word('расцарапываешься', 6),
  singular3rdPerson: Word('расцарапывается', 6),
  plural1stPerson: Word('расцарапываемся', 6),
  plural2ndPerson: Word('расцарапываетесь', 6),
  plural3rdPerson: Word('расцарапываются', 6),
  masculinePast: Word('расцарапывался', 6),
  femininePast: Word('расцарапывалась', 6),
  neuterPast: Word('расцарапывалось', 6),
  pluralPast: Word('расцарапывались', 6),
  imperativeInformal: Word('расцарапывайся', 6),
  imperativeFormal: Word('расцарапывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расцарапываться.name.text, расцарапываться);

export { расцарапываться };
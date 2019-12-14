import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домываться: PerfectVerb = {
  name: Word('домываться', 5),
  singular1stPerson: Word('домываюсь', 5),
  singular2ndPerson: Word('домываешься', 5),
  singular3rdPerson: Word('домывается', 5),
  plural1stPerson: Word('домываемся', 5),
  plural2ndPerson: Word('домываетесь', 5),
  plural3rdPerson: Word('домываются', 5),
  masculinePast: Word('домывался', 5),
  femininePast: Word('домывалась', 5),
  neuterPast: Word('домывалось', 5),
  pluralPast: Word('домывались', 5),
  imperativeInformal: Word('домывайся', 5),
  imperativeFormal: Word('домывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(домываться.name.text, домываться);

export { домываться };
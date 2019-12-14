import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскаляться: PerfectVerb = {
  name: Word('раскаляться', 6),
  singular1stPerson: Word('раскаляюсь', 6),
  singular2ndPerson: Word('раскаляешься', 6),
  singular3rdPerson: Word('раскаляется', 6),
  plural1stPerson: Word('раскаляемся', 6),
  plural2ndPerson: Word('раскаляетесь', 6),
  plural3rdPerson: Word('раскаляются', 6),
  masculinePast: Word('раскалялся', 6),
  femininePast: Word('раскалялась', 6),
  neuterPast: Word('раскалялось', 6),
  pluralPast: Word('раскалялись', 6),
  imperativeInformal: Word('раскаляйся', 6),
  imperativeFormal: Word('раскаляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(раскаляться.name.text, раскаляться);

export { раскаляться };
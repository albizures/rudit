import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскашляться: PerfectVerb = {
  name: Word('раскашляться', 4),
  singular1stPerson: Word('раскашляюсь', 4),
  singular2ndPerson: Word('раскашляешься', 4),
  singular3rdPerson: Word('раскашляется', 4),
  plural1stPerson: Word('раскашляемся', 4),
  plural2ndPerson: Word('раскашляетесь', 4),
  plural3rdPerson: Word('раскашляются', 4),
  masculinePast: Word('раскашлялся', 4),
  femininePast: Word('раскашлялась', 4),
  neuterPast: Word('раскашлялось', 4),
  pluralPast: Word('раскашлялись', 4),
  imperativeInformal: Word('раскашляйся', 4),
  imperativeFormal: Word('раскашляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскашляться.name.text, раскашляться);

export { раскашляться };
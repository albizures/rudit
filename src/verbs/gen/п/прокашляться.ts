import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокашляться: PerfectVerb = {
  name: Word('прокашляться', 4),
  singular1stPerson: Word('прокашляюсь', 4),
  singular2ndPerson: Word('прокашляешься', 4),
  singular3rdPerson: Word('прокашляется', 4),
  plural1stPerson: Word('прокашляемся', 4),
  plural2ndPerson: Word('прокашляетесь', 4),
  plural3rdPerson: Word('прокашляются', 4),
  masculinePast: Word('прокашлялся', 4),
  femininePast: Word('прокашлялась', 4),
  neuterPast: Word('прокашлялось', 4),
  pluralPast: Word('прокашлялись', 4),
  imperativeInformal: Word('прокашляйся', 4),
  imperativeFormal: Word('прокашляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прокашляться.name.text, прокашляться);

export { прокашляться };
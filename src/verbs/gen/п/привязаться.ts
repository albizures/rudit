import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привязаться: PerfectVerb = {
  name: Word('привязаться', 6),
  singular1stPerson: Word('привяжусь', 6),
  singular2ndPerson: Word('привяжешься', 4),
  singular3rdPerson: Word('привяжется', 4),
  plural1stPerson: Word('привяжемся', 4),
  plural2ndPerson: Word('привяжетесь', 4),
  plural3rdPerson: Word('привяжутся', 4),
  masculinePast: Word('привязался', 6),
  femininePast: Word('привязалась', 6),
  neuterPast: Word('привязалось', 6),
  pluralPast: Word('привязались', 6),
  imperativeInformal: Word('привяжись', 6),
  imperativeFormal: Word('привяжитесь', 6),
  imperfect: [],
};

perfectVerbs.set(привязаться.name.text, привязаться);

export { привязаться };
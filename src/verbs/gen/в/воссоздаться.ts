import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоздаться: PerfectVerb = {
  name: Word('воссоздаться', 7),
  singular1stPerson: Word('воссоздамся', 7),
  singular2ndPerson: Word('воссоздашься', 7),
  singular3rdPerson: Word('воссоздастся', 7),
  plural1stPerson: Word('воссоздадимся', 9),
  plural2ndPerson: Word('воссоздадитесь', 9),
  plural3rdPerson: Word('воссоздадутся', 9),
  masculinePast: Word('воссоздался', 7),
  femininePast: Word('воссоздалась', 9),
  neuterPast: Word('воссоздалось//воссоздало'сь', 7),
  pluralPast: Word('воссоздались//воссоздали'сь', 7),
  imperativeInformal: Word('воссоздайся', 7),
  imperativeFormal: Word('воссоздайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(воссоздаться.name.text, воссоздаться);

export { воссоздаться };
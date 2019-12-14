import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ободрить: PerfectVerb = {
  name: Word('ободрить', 5),
  singular1stPerson: Word('ободрю', 5),
  singular2ndPerson: Word('ободришь', 5),
  singular3rdPerson: Word('ободрит', 5),
  plural1stPerson: Word('ободрим', 5),
  plural2ndPerson: Word('ободрите', 5),
  plural3rdPerson: Word('ободрят', 5),
  masculinePast: Word('ободрил', 5),
  femininePast: Word('ободрила', 5),
  neuterPast: Word('ободрило', 5),
  pluralPast: Word('ободрили', 5),
  imperativeInformal: Word('ободри', 5),
  imperativeFormal: Word('ободрите', 5),
  imperfect: [],
};

perfectVerbs.set(ободрить.name.text, ободрить);

export { ободрить };
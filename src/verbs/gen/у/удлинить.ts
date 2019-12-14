import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удлинить: PerfectVerb = {
  name: Word('удлинить', 5),
  singular1stPerson: Word('удлиню', 5),
  singular2ndPerson: Word('удлинишь', 5),
  singular3rdPerson: Word('удлинит', 5),
  plural1stPerson: Word('удлиним', 5),
  plural2ndPerson: Word('удлините', 5),
  plural3rdPerson: Word('удлинят', 5),
  masculinePast: Word('удлинил', 5),
  femininePast: Word('удлинила', 5),
  neuterPast: Word('удлинило', 5),
  pluralPast: Word('удлинили', 5),
  imperativeInformal: Word('удлини', 5),
  imperativeFormal: Word('удлините', 5),
  imperfect: [],
};

perfectVerbs.set(удлинить.name.text, удлинить);

export { удлинить };
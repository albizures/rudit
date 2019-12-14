import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огранить: PerfectVerb = {
  name: Word('огранить', 5),
  singular1stPerson: Word('ограню', 5),
  singular2ndPerson: Word('огранишь', 5),
  singular3rdPerson: Word('огранит', 5),
  plural1stPerson: Word('ограним', 5),
  plural2ndPerson: Word('ограните', 5),
  plural3rdPerson: Word('огранят', 5),
  masculinePast: Word('огранил', 5),
  femininePast: Word('огранила', 5),
  neuterPast: Word('огранило', 5),
  pluralPast: Word('огранили', 5),
  imperativeInformal: Word('ограни', 5),
  imperativeFormal: Word('ограните', 5),
  imperfect: [],
};

perfectVerbs.set(огранить.name.text, огранить);

export { огранить };
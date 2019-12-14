import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завопить: PerfectVerb = {
  name: Word('завопить', 5),
  singular1stPerson: Word('завоплю', 6),
  singular2ndPerson: Word('завопишь', 5),
  singular3rdPerson: Word('завопит', 5),
  plural1stPerson: Word('завопим', 5),
  plural2ndPerson: Word('завопите', 5),
  plural3rdPerson: Word('завопят', 5),
  masculinePast: Word('завопил', 5),
  femininePast: Word('завопила', 5),
  neuterPast: Word('завопило', 5),
  pluralPast: Word('завопили', 5),
  imperativeInformal: Word('завопи', 5),
  imperativeFormal: Word('завопите', 5),
  imperfect: [],
};

perfectVerbs.set(завопить.name.text, завопить);

export { завопить };
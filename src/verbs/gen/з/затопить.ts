import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затопить: PerfectVerb = {
  name: Word('затопить', 5),
  singular1stPerson: Word('затоплю', 6),
  singular2ndPerson: Word('затопишь', 3),
  singular3rdPerson: Word('затопит', 3),
  plural1stPerson: Word('затопим', 3),
  plural2ndPerson: Word('затопите', 3),
  plural3rdPerson: Word('затопят', 3),
  masculinePast: Word('затопил', 5),
  femininePast: Word('затопила', 5),
  neuterPast: Word('затопило', 5),
  pluralPast: Word('затопили', 5),
  imperativeInformal: Word('затопи', 5),
  imperativeFormal: Word('затопите', 5),
  imperfect: [],
};

perfectVerbs.set(затопить.name.text, затопить);

export { затопить };
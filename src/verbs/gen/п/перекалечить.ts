import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекалечить: PerfectVerb = {
  name: Word('перекалечить', 7),
  singular1stPerson: Word('перекалечу', 7),
  singular2ndPerson: Word('перекалечишь', 7),
  singular3rdPerson: Word('перекалечит', 7),
  plural1stPerson: Word('перекалечим', 7),
  plural2ndPerson: Word('перекалечите', 7),
  plural3rdPerson: Word('перекалечат', 7),
  masculinePast: Word('перекалечил', 7),
  femininePast: Word('перекалечила', 7),
  neuterPast: Word('перекалечило', 7),
  pluralPast: Word('перекалечили', 7),
  imperativeInformal: Word('перекалечь', 7),
  imperativeFormal: Word('перекалечьте', 7),
  imperfect: [],
};

perfectVerbs.set(перекалечить.name.text, перекалечить);

export { перекалечить };
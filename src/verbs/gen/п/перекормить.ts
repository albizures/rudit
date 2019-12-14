import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекормить: PerfectVerb = {
  name: Word('перекормить', 8),
  singular1stPerson: Word('перекормлю', 9),
  singular2ndPerson: Word('перекормишь', 5),
  singular3rdPerson: Word('перекормит', 5),
  plural1stPerson: Word('перекормим', 5),
  plural2ndPerson: Word('перекормите', 5),
  plural3rdPerson: Word('перекормят', 5),
  masculinePast: Word('перекормил', 8),
  femininePast: Word('перекормила', 8),
  neuterPast: Word('перекормило', 8),
  pluralPast: Word('перекормили', 8),
  imperativeInformal: Word('перекорми', 8),
  imperativeFormal: Word('перекормите', 8),
  imperfect: [],
};

perfectVerbs.set(перекормить.name.text, перекормить);

export { перекормить };
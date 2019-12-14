import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерубить: PerfectVerb = {
  name: Word('перерубить', 7),
  singular1stPerson: Word('перерублю', 8),
  singular2ndPerson: Word('перерубишь', 5),
  singular3rdPerson: Word('перерубит', 5),
  plural1stPerson: Word('перерубим', 5),
  plural2ndPerson: Word('перерубите', 5),
  plural3rdPerson: Word('перерубят', 5),
  masculinePast: Word('перерубил', 7),
  femininePast: Word('перерубила', 7),
  neuterPast: Word('перерубило', 7),
  pluralPast: Word('перерубили', 7),
  imperativeInformal: Word('переруби', 7),
  imperativeFormal: Word('перерубите', 7),
  imperfect: [],
};

perfectVerbs.set(перерубить.name.text, перерубить);

export { перерубить };
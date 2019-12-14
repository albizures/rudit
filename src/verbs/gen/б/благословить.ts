import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благословить: PerfectVerb = {
  name: Word('благословить', 9),
  singular1stPerson: Word('благословлю', 10),
  singular2ndPerson: Word('благословишь', 9),
  singular3rdPerson: Word('благословит', 9),
  plural1stPerson: Word('благословим', 9),
  plural2ndPerson: Word('благословите', 9),
  plural3rdPerson: Word('благословят', 9),
  masculinePast: Word('благословил', 9),
  femininePast: Word('благословила', 9),
  neuterPast: Word('благословило', 9),
  pluralPast: Word('благословили', 9),
  imperativeInformal: Word('благослови', 9),
  imperativeFormal: Word('благословите', 9),
  imperfect: ['благословлять'],
};

perfectVerbs.set(благословить.name.text, благословить);

export { благословить };
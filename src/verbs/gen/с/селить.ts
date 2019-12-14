import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const селить: PerfectVerb = {
  name: Word('селить', 3),
  singular1stPerson: Word('селю', 3),
  singular2ndPerson: Word('селишь', 3),
  singular3rdPerson: Word('селит', 3),
  plural1stPerson: Word('селим', 3),
  plural2ndPerson: Word('селите', 3),
  plural3rdPerson: Word('селят', 3),
  masculinePast: Word('селил', 3),
  femininePast: Word('селила', 3),
  neuterPast: Word('селило', 3),
  pluralPast: Word('селили', 3),
  imperativeInformal: Word('сели', 3),
  imperativeFormal: Word('селите', 3),
  imperfect: [],
};

perfectVerbs.set(селить.name.text, селить);

export { селить };
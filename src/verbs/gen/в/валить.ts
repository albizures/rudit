import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const валить: PerfectVerb = {
  name: Word('валить', 3),
  singular1stPerson: Word('валю', 3),
  singular2ndPerson: Word('валишь', 1),
  singular3rdPerson: Word('валит', 1),
  plural1stPerson: Word('валим', 1),
  plural2ndPerson: Word('валите', 1),
  plural3rdPerson: Word('валят', 1),
  masculinePast: Word('валил', 3),
  femininePast: Word('валила', 3),
  neuterPast: Word('валило', 3),
  pluralPast: Word('валили', 3),
  imperativeInformal: Word('вали', 3),
  imperativeFormal: Word('валите', 3),
  imperfect: ['повалить'],
};

perfectVerbs.set(валить.name.text, валить);

export { валить };
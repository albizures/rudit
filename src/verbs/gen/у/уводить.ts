import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уводить: PerfectVerb = {
  name: Word('уводить', 4),
  singular1stPerson: Word('увожу', 4),
  singular2ndPerson: Word('уводишь', 2),
  singular3rdPerson: Word('уводит', 2),
  plural1stPerson: Word('уводим', 2),
  plural2ndPerson: Word('уводите', 2),
  plural3rdPerson: Word('уводят', 2),
  masculinePast: Word('уводил', 4),
  femininePast: Word('уводила', 4),
  neuterPast: Word('уводило', 4),
  pluralPast: Word('уводили', 4),
  imperativeInformal: Word('уводи', 4),
  imperativeFormal: Word('уводите', 4),
  imperfect: ['увести'],
};

perfectVerbs.set(уводить.name.text, уводить);

export { уводить };
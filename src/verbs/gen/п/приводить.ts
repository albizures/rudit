import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приводить: PerfectVerb = {
  name: Word('приводить', 6),
  singular1stPerson: Word('привожу', 6),
  singular2ndPerson: Word('приводишь', 4),
  singular3rdPerson: Word('приводит', 4),
  plural1stPerson: Word('приводим', 4),
  plural2ndPerson: Word('приводите', 4),
  plural3rdPerson: Word('приводят', 4),
  masculinePast: Word('приводил', 6),
  femininePast: Word('приводила', 6),
  neuterPast: Word('приводило', 6),
  pluralPast: Word('приводили', 6),
  imperativeInformal: Word('приводи', 6),
  imperativeFormal: Word('приводите', 6),
  imperfect: ['привести'],
};

perfectVerbs.set(приводить.name.text, приводить);

export { приводить };
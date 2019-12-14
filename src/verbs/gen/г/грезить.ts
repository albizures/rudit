import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грезить: PerfectVerb = {
  name: Word('грезить', 2),
  singular1stPerson: Word('грежу', 2),
  singular2ndPerson: Word('грезишь', 2),
  singular3rdPerson: Word('грезит', 2),
  plural1stPerson: Word('грезим', 2),
  plural2ndPerson: Word('грезите', 2),
  plural3rdPerson: Word('грезят', 2),
  masculinePast: Word('грезил', 2),
  femininePast: Word('грезила', 2),
  neuterPast: Word('грезило', 2),
  pluralPast: Word('грезили', 2),
  imperativeInformal: Word('грезь', 2),
  imperativeFormal: Word('грезьте', 2),
  imperfect: [],
};

perfectVerbs.set(грезить.name.text, грезить);

export { грезить };
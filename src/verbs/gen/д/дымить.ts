import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дымить: PerfectVerb = {
  name: Word('дымить', 3),
  singular1stPerson: Word('дымлю', 4),
  singular2ndPerson: Word('дымишь', 3),
  singular3rdPerson: Word('дымит', 3),
  plural1stPerson: Word('дымим', 3),
  plural2ndPerson: Word('дымите', 3),
  plural3rdPerson: Word('дымят', 3),
  masculinePast: Word('дымил', 3),
  femininePast: Word('дымила', 3),
  neuterPast: Word('дымило', 3),
  pluralPast: Word('дымили', 3),
  imperativeInformal: Word('дыми', 3),
  imperativeFormal: Word('дымите', 3),
  imperfect: ['надымить'],
};

perfectVerbs.set(дымить.name.text, дымить);

export { дымить };
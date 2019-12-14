import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возлюбить: PerfectVerb = {
  name: Word('возлюбить', 6),
  singular1stPerson: Word('возлюблю', 7),
  singular2ndPerson: Word('возлюбишь', 4),
  singular3rdPerson: Word('возлюбит', 4),
  plural1stPerson: Word('возлюбим', 4),
  plural2ndPerson: Word('возлюбите', 4),
  plural3rdPerson: Word('возлюбят', 4),
  masculinePast: Word('возлюбил', 6),
  femininePast: Word('возлюбила', 6),
  neuterPast: Word('возлюбило', 6),
  pluralPast: Word('возлюбили', 6),
  imperativeInformal: Word('возлюби', 6),
  imperativeFormal: Word('возлюбите', 6),
  imperfect: ['любить'],
};

perfectVerbs.set(возлюбить.name.text, возлюбить);

export { возлюбить };
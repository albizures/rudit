import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебраниваться: PerfectVerb = {
  name: Word('перебраниваться', 6),
  singular1stPerson: Word('перебраниваюсь', 6),
  singular2ndPerson: Word('перебраниваешься', 6),
  singular3rdPerson: Word('перебранивается', 6),
  plural1stPerson: Word('перебраниваемся', 6),
  plural2ndPerson: Word('перебраниваетесь', 6),
  plural3rdPerson: Word('перебраниваются', 6),
  masculinePast: Word('перебранивался', 6),
  femininePast: Word('перебранивалась', 6),
  neuterPast: Word('перебранивалось', 6),
  pluralPast: Word('перебранивались', 6),
  imperativeInformal: Word('перебранивайся', 6),
  imperativeFormal: Word('перебранивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(перебраниваться.name.text, перебраниваться);

export { перебраниваться };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебиваться: PerfectVerb = {
  name: Word('перебиваться', 7),
  singular1stPerson: Word('перебиваюсь', 7),
  singular2ndPerson: Word('перебиваешься', 7),
  singular3rdPerson: Word('перебивается', 7),
  plural1stPerson: Word('перебиваемся', 7),
  plural2ndPerson: Word('перебиваетесь', 7),
  plural3rdPerson: Word('перебиваются', 7),
  masculinePast: Word('перебивался', 7),
  femininePast: Word('перебивалась', 7),
  neuterPast: Word('перебивалось', 7),
  pluralPast: Word('перебивались', 7),
  imperativeInformal: Word('перебивайся', 7),
  imperativeFormal: Word('перебивайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перебиваться.name.text, перебиваться);

export { перебиваться };
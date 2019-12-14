import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевиваться: PerfectVerb = {
  name: Word('перевиваться', 7),
  singular1stPerson: Word('перевиваюсь', 7),
  singular2ndPerson: Word('перевиваешься', 7),
  singular3rdPerson: Word('перевивается', 7),
  plural1stPerson: Word('перевиваемся', 7),
  plural2ndPerson: Word('перевиваетесь', 7),
  plural3rdPerson: Word('перевиваются', 7),
  masculinePast: Word('перевивался', 7),
  femininePast: Word('перевивалась', 7),
  neuterPast: Word('перевивалось', 7),
  pluralPast: Word('перевивались', 7),
  imperativeInformal: Word('перевивайся', 7),
  imperativeFormal: Word('перевивайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перевиваться.name.text, перевиваться);

export { перевиваться };
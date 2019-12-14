import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегибаться: PerfectVerb = {
  name: Word('перегибаться', 7),
  singular1stPerson: Word('перегибаюсь', 7),
  singular2ndPerson: Word('перегибаешься', 7),
  singular3rdPerson: Word('перегибается', 7),
  plural1stPerson: Word('перегибаемся', 7),
  plural2ndPerson: Word('перегибаетесь', 7),
  plural3rdPerson: Word('перегибаются', 7),
  masculinePast: Word('перегибался', 7),
  femininePast: Word('перегибалась', 7),
  neuterPast: Word('перегибалось', 7),
  pluralPast: Word('перегибались', 7),
  imperativeInformal: Word('перегибайся', 7),
  imperativeFormal: Word('перегибайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перегибаться.name.text, перегибаться);

export { перегибаться };
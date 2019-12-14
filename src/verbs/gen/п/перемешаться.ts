import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемешаться: PerfectVerb = {
  name: Word('перемешаться', 7),
  singular1stPerson: Word('перемешаюсь', 7),
  singular2ndPerson: Word('перемешаешься', 7),
  singular3rdPerson: Word('перемешается', 7),
  plural1stPerson: Word('перемешаемся', 7),
  plural2ndPerson: Word('перемешаетесь', 7),
  plural3rdPerson: Word('перемешаются', 7),
  masculinePast: Word('перемешался', 7),
  femininePast: Word('перемешалась', 7),
  neuterPast: Word('перемешалось', 7),
  pluralPast: Word('перемешались', 7),
  imperativeInformal: Word('перемешайся', 7),
  imperativeFormal: Word('перемешайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перемешаться.name.text, перемешаться);

export { перемешаться };
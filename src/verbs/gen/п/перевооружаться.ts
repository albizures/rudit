import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевооружаться: PerfectVerb = {
  name: Word('перевооружаться', 10),
  singular1stPerson: Word('перевооружаюсь', 10),
  singular2ndPerson: Word('перевооружаешься', 10),
  singular3rdPerson: Word('перевооружается', 10),
  plural1stPerson: Word('перевооружаемся', 10),
  plural2ndPerson: Word('перевооружаетесь', 10),
  plural3rdPerson: Word('перевооружаются', 10),
  masculinePast: Word('перевооружался', 10),
  femininePast: Word('перевооружалась', 10),
  neuterPast: Word('перевооружалось', 10),
  pluralPast: Word('перевооружались', 10),
  imperativeInformal: Word('перевооружайся', 10),
  imperativeFormal: Word('перевооружайтесь', 10),
  imperfect: [],
};

perfectVerbs.set(перевооружаться.name.text, перевооружаться);

export { перевооружаться };
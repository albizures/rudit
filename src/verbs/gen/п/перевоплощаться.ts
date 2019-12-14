import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевоплощаться: PerfectVerb = {
  name: Word('перевоплощаться', 10),
  singular1stPerson: Word('перевоплощаюсь', 10),
  singular2ndPerson: Word('перевоплощаешься', 10),
  singular3rdPerson: Word('перевоплощается', 10),
  plural1stPerson: Word('перевоплощаемся', 10),
  plural2ndPerson: Word('перевоплощаетесь', 10),
  plural3rdPerson: Word('перевоплощаются', 10),
  masculinePast: Word('перевоплощался', 10),
  femininePast: Word('перевоплощалась', 10),
  neuterPast: Word('перевоплощалось', 10),
  pluralPast: Word('перевоплощались', 10),
  imperativeInformal: Word('перевоплощайся', 10),
  imperativeFormal: Word('перевоплощайтесь', 10),
  imperfect: [],
};

perfectVerbs.set(перевоплощаться.name.text, перевоплощаться);

export { перевоплощаться };
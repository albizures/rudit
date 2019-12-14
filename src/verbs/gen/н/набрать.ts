import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набрать: PerfectVerb = {
  name: Word('набрать', 4),
  singular1stPerson: Word('наберу', 5),
  singular2ndPerson: Word('наберёшь', 1),
  singular3rdPerson: Word('наберёт', 1),
  plural1stPerson: Word('наберём', 1),
  plural2ndPerson: Word('наберёте', 1),
  plural3rdPerson: Word('наберут', 5),
  masculinePast: Word('набрал', 4),
  femininePast: Word('набрала', 6),
  neuterPast: Word('набрало', 4),
  pluralPast: Word('набрали', 4),
  imperativeInformal: Word('набери', 5),
  imperativeFormal: Word('наберите', 5),
  imperfect: ['набирать'],
};

perfectVerbs.set(набрать.name.text, набрать);

export { набрать };
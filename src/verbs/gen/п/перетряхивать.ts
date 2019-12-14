import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетряхивать: PerfectVerb = {
  name: Word('перетряхивать', 6),
  singular1stPerson: Word('перетряхиваю', 6),
  singular2ndPerson: Word('перетряхиваешь', 6),
  singular3rdPerson: Word('перетряхивает', 6),
  plural1stPerson: Word('перетряхиваем', 6),
  plural2ndPerson: Word('перетряхиваете', 6),
  plural3rdPerson: Word('перетряхивают', 6),
  masculinePast: Word('перетряхивал', 6),
  femininePast: Word('перетряхивала', 6),
  neuterPast: Word('перетряхивало', 6),
  pluralPast: Word('перетряхивали', 6),
  imperativeInformal: Word('перетряхивай', 6),
  imperativeFormal: Word('перетряхивайте', 6),
  imperfect: [],
};

perfectVerbs.set(перетряхивать.name.text, перетряхивать);

export { перетряхивать };